# `dataAwsccBedrockAutomatedReasoningPolicyVersion` Submodule <a name="`dataAwsccBedrockAutomatedReasoningPolicyVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockAutomatedReasoningPolicyVersion <a name="DataAwsccBedrockAutomatedReasoningPolicyVersion" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_automated_reasoning_policy_version awscc_bedrock_automated_reasoning_policy_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyVersion(Construct Scope, string Id, DataAwsccBedrockAutomatedReasoningPolicyVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig">DataAwsccBedrockAutomatedReasoningPolicyVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig">DataAwsccBedrockAutomatedReasoningPolicyVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockAutomatedReasoningPolicyVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockAutomatedReasoningPolicyVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockAutomatedReasoningPolicyVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockAutomatedReasoningPolicyVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockAutomatedReasoningPolicyVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBedrockAutomatedReasoningPolicyVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockAutomatedReasoningPolicyVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockAutomatedReasoningPolicyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_automated_reasoning_policy_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockAutomatedReasoningPolicyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.definitionHash">DefinitionHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.lastUpdatedDefinitionHash">LastUpdatedDefinitionHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.policyArn">PolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList">DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DefinitionHash`<sup>Required</sup> <a name="DefinitionHash" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.definitionHash"></a>

```csharp
public string DefinitionHash { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LastUpdatedDefinitionHash`<sup>Required</sup> <a name="LastUpdatedDefinitionHash" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.lastUpdatedDefinitionHash"></a>

```csharp
public string LastUpdatedDefinitionHash { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.policyArn"></a>

```csharp
public string PolicyArn { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.tags"></a>

```csharp
public DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList">DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockAutomatedReasoningPolicyVersionConfig <a name="DataAwsccBedrockAutomatedReasoningPolicyVersionConfig" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyVersionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_automated_reasoning_policy_version#id DataAwsccBedrockAutomatedReasoningPolicyVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockAutomatedReasoningPolicyVersionTags <a name="DataAwsccBedrockAutomatedReasoningPolicyVersionTags" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyVersionTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList <a name="DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.get"></a>

```csharp
private DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference <a name="DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTags">DataAwsccBedrockAutomatedReasoningPolicyVersionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockAutomatedReasoningPolicyVersionTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockAutomatedReasoningPolicyVersion.DataAwsccBedrockAutomatedReasoningPolicyVersionTags">DataAwsccBedrockAutomatedReasoningPolicyVersionTags</a>

---



