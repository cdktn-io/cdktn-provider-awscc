# `dataAwsccBedrockAutomatedReasoningPolicy` Submodule <a name="`dataAwsccBedrockAutomatedReasoningPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockAutomatedReasoningPolicy <a name="DataAwsccBedrockAutomatedReasoningPolicy" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_automated_reasoning_policy awscc_bedrock_automated_reasoning_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicy(Construct Scope, string Id, DataAwsccBedrockAutomatedReasoningPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig">DataAwsccBedrockAutomatedReasoningPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig">DataAwsccBedrockAutomatedReasoningPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockAutomatedReasoningPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockAutomatedReasoningPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockAutomatedReasoningPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockAutomatedReasoningPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockAutomatedReasoningPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBedrockAutomatedReasoningPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockAutomatedReasoningPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockAutomatedReasoningPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_automated_reasoning_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockAutomatedReasoningPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.definitionHash">DefinitionHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.forceDelete">ForceDelete</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyArn">PolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyDefinition">PolicyDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList">DataAwsccBedrockAutomatedReasoningPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DefinitionHash`<sup>Required</sup> <a name="DefinitionHash" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.definitionHash"></a>

```csharp
public string DefinitionHash { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.forceDelete"></a>

```csharp
public IResolvable ForceDelete { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyArn"></a>

```csharp
public string PolicyArn { get; }
```

- *Type:* string

---

##### `PolicyDefinition`<sup>Required</sup> <a name="PolicyDefinition" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyDefinition"></a>

```csharp
public DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference PolicyDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference</a>

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.tags"></a>

```csharp
public DataAwsccBedrockAutomatedReasoningPolicyTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList">DataAwsccBedrockAutomatedReasoningPolicyTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockAutomatedReasoningPolicyConfig <a name="DataAwsccBedrockAutomatedReasoningPolicyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrock_automated_reasoning_policy#id DataAwsccBedrockAutomatedReasoningPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition {

};
```


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules {

};
```


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes {

};
```


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues {

};
```


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables {

};
```


### DataAwsccBedrockAutomatedReasoningPolicyTags <a name="DataAwsccBedrockAutomatedReasoningPolicyTags" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.types">Types</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rules"></a>

```csharp
public DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList</a>

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.types"></a>

```csharp
public DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList Types { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList</a>

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variables"></a>

```csharp
public DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList Variables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinition</a>

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get"></a>

```csharp
private DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpression">AlternateExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlternateExpression`<sup>Required</sup> <a name="AlternateExpression" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpression"></a>

```csharp
public string AlternateExpression { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get"></a>

```csharp
private DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.values">Values</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.values"></a>

```csharp
public DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList Values { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get"></a>

```csharp
private DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get"></a>

```csharp
private DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables">DataAwsccBedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>

---


### DataAwsccBedrockAutomatedReasoningPolicyTagsList <a name="DataAwsccBedrockAutomatedReasoningPolicyTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.get"></a>

```csharp
private DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTags">DataAwsccBedrockAutomatedReasoningPolicyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockAutomatedReasoningPolicyTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicy.DataAwsccBedrockAutomatedReasoningPolicyTags">DataAwsccBedrockAutomatedReasoningPolicyTags</a>

---



