# `dataAwsccBedrockPrompt` Submodule <a name="`dataAwsccBedrockPrompt` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockPrompt <a name="DataAwsccBedrockPrompt" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_prompt awscc_bedrock_prompt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPrompt(Construct Scope, string Id, DataAwsccBedrockPromptConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig">DataAwsccBedrockPromptConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig">DataAwsccBedrockPromptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockPrompt resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockPrompt.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockPrompt.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockPrompt.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockPrompt.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBedrockPrompt resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockPrompt to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockPrompt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_prompt#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockPrompt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.customerEncryptionKeyArn">CustomerEncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.defaultVariant">DefaultVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.promptId">PromptId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.variants">Variants</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList">DataAwsccBedrockPromptVariantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CustomerEncryptionKeyArn`<sup>Required</sup> <a name="CustomerEncryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.customerEncryptionKeyArn"></a>

```csharp
public string CustomerEncryptionKeyArn { get; }
```

- *Type:* string

---

##### `DefaultVariant`<sup>Required</sup> <a name="DefaultVariant" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.defaultVariant"></a>

```csharp
public string DefaultVariant { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PromptId`<sup>Required</sup> <a name="PromptId" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.promptId"></a>

```csharp
public string PromptId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Variants`<sup>Required</sup> <a name="Variants" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.variants"></a>

```csharp
public DataAwsccBedrockPromptVariantsList Variants { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList">DataAwsccBedrockPromptVariantsList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPrompt.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockPromptConfig <a name="DataAwsccBedrockPromptConfig" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrock_prompt#id DataAwsccBedrockPrompt#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockPromptVariants <a name="DataAwsccBedrockPromptVariants" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariants.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariants {

};
```


### DataAwsccBedrockPromptVariantsGenAiResource <a name="DataAwsccBedrockPromptVariantsGenAiResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsGenAiResource {

};
```


### DataAwsccBedrockPromptVariantsGenAiResourceAgent <a name="DataAwsccBedrockPromptVariantsGenAiResourceAgent" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsGenAiResourceAgent {

};
```


### DataAwsccBedrockPromptVariantsInferenceConfiguration <a name="DataAwsccBedrockPromptVariantsInferenceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsInferenceConfiguration {

};
```


### DataAwsccBedrockPromptVariantsInferenceConfigurationText <a name="DataAwsccBedrockPromptVariantsInferenceConfigurationText" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationText.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsInferenceConfigurationText {

};
```


### DataAwsccBedrockPromptVariantsMetadata <a name="DataAwsccBedrockPromptVariantsMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsMetadata {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfiguration <a name="DataAwsccBedrockPromptVariantsTemplateConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfiguration {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChat <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChat" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChat.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChat {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationText <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationText" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationText.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationText {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables {

};
```


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference <a name="DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifier">AgentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgent">DataAwsccBedrockPromptVariantsGenAiResourceAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentIdentifier`<sup>Required</sup> <a name="AgentIdentifier" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.agentIdentifier"></a>

```csharp
public string AgentIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsGenAiResourceAgent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgent">DataAwsccBedrockPromptVariantsGenAiResourceAgent</a>

---


### DataAwsccBedrockPromptVariantsGenAiResourceOutputReference <a name="DataAwsccBedrockPromptVariantsGenAiResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsGenAiResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.agent">Agent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference">DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResource">DataAwsccBedrockPromptVariantsGenAiResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.agent"></a>

```csharp
public DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference Agent { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference">DataAwsccBedrockPromptVariantsGenAiResourceAgentOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsGenAiResource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResource">DataAwsccBedrockPromptVariantsGenAiResource</a>

---


### DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference <a name="DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.text">Text</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference">DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfiguration">DataAwsccBedrockPromptVariantsInferenceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.text"></a>

```csharp
public DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference Text { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference">DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsInferenceConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfiguration">DataAwsccBedrockPromptVariantsInferenceConfiguration</a>

---


### DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference <a name="DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokens">MaxTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequences">StopSequences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topP">TopP</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationText">DataAwsccBedrockPromptVariantsInferenceConfigurationText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.maxTokens"></a>

```csharp
public double MaxTokens { get; }
```

- *Type:* double

---

##### `StopSequences`<sup>Required</sup> <a name="StopSequences" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.stopSequences"></a>

```csharp
public string[] StopSequences { get; }
```

- *Type:* string[]

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.topP"></a>

```csharp
public double TopP { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationTextOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsInferenceConfigurationText InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationText">DataAwsccBedrockPromptVariantsInferenceConfigurationText</a>

---


### DataAwsccBedrockPromptVariantsList <a name="DataAwsccBedrockPromptVariantsList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.get"></a>

```csharp
private DataAwsccBedrockPromptVariantsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockPromptVariantsMetadataList <a name="DataAwsccBedrockPromptVariantsMetadataList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.get"></a>

```csharp
private DataAwsccBedrockPromptVariantsMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockPromptVariantsMetadataOutputReference <a name="DataAwsccBedrockPromptVariantsMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadata">DataAwsccBedrockPromptVariantsMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadata">DataAwsccBedrockPromptVariantsMetadata</a>

---


### DataAwsccBedrockPromptVariantsOutputReference <a name="DataAwsccBedrockPromptVariantsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.additionalModelRequestFields">AdditionalModelRequestFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.genAiResource">GenAiResource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference">DataAwsccBedrockPromptVariantsGenAiResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.inferenceConfiguration">InferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference">DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList">DataAwsccBedrockPromptVariantsMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.templateConfiguration">TemplateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.templateType">TemplateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariants">DataAwsccBedrockPromptVariants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalModelRequestFields`<sup>Required</sup> <a name="AdditionalModelRequestFields" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.additionalModelRequestFields"></a>

```csharp
public string AdditionalModelRequestFields { get; }
```

- *Type:* string

---

##### `GenAiResource`<sup>Required</sup> <a name="GenAiResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.genAiResource"></a>

```csharp
public DataAwsccBedrockPromptVariantsGenAiResourceOutputReference GenAiResource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsGenAiResourceOutputReference">DataAwsccBedrockPromptVariantsGenAiResourceOutputReference</a>

---

##### `InferenceConfiguration`<sup>Required</sup> <a name="InferenceConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.inferenceConfiguration"></a>

```csharp
public DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference InferenceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference">DataAwsccBedrockPromptVariantsInferenceConfigurationOutputReference</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.metadata"></a>

```csharp
public DataAwsccBedrockPromptVariantsMetadataList Metadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsMetadataList">DataAwsccBedrockPromptVariantsMetadataList</a>

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TemplateConfiguration`<sup>Required</sup> <a name="TemplateConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.templateConfiguration"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference TemplateConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference</a>

---

##### `TemplateType`<sup>Required</sup> <a name="TemplateType" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.templateType"></a>

```csharp
public string TemplateType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariants InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariants">DataAwsccBedrockPromptVariants</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get"></a>

```csharp
private DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables">DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables">DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariables</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePoint</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get"></a>

```csharp
private DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CachePoint`<sup>Required</sup> <a name="CachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.cachePoint"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference CachePoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentCachePointOutputReference</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContent</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.get"></a>

```csharp
private DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.content"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList Content { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesContentList</a>

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessages</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messages">Messages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttribute">SystemAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration">ToolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChat">DataAwsccBedrockPromptVariantsTemplateConfigurationChat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.inputVariables"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList InputVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatInputVariablesList</a>

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.messages"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList Messages { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatMessagesList</a>

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.systemAttribute"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList SystemAttribute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList</a>

---

##### `ToolConfiguration`<sup>Required</sup> <a name="ToolConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.toolConfiguration"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference ToolConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChat InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChat">DataAwsccBedrockPromptVariantsTemplateConfigurationChat</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePoint</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.get"></a>

```csharp
private DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CachePoint`<sup>Required</sup> <a name="CachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.cachePoint"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference CachePoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemCachePointOutputReference</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystemOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem">DataAwsccBedrockPromptVariantsTemplateConfigurationChatSystem</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice">ToolChoice</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools">Tools</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ToolChoice`<sup>Required</sup> <a name="ToolChoice" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.toolChoice"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference ToolChoice { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference</a>

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.tools"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList Tools { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfiguration</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any">Any</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto">Auto</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool">Tool</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Any`<sup>Required</sup> <a name="Any" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.any"></a>

```csharp
public string Any { get; }
```

- *Type:* string

---

##### `Auto`<sup>Required</sup> <a name="Auto" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.auto"></a>

```csharp
public string Auto { get; }
```

- *Type:* string

---

##### `Tool`<sup>Required</sup> <a name="Tool" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.tool"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference Tool { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoice</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceToolOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolChoiceTool</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePoint</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get"></a>

```csharp
private DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec">ToolSpec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CachePoint`<sup>Required</sup> <a name="CachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.cachePoint"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference CachePoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsCachePointOutputReference</a>

---

##### `ToolSpec`<sup>Required</sup> <a name="ToolSpec" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.toolSpec"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference ToolSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationTools</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json">Json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.json"></a>

```csharp
public string Json { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchema</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema">InputSchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InputSchema`<sup>Required</sup> <a name="InputSchema" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.inputSchema"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference InputSchema { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecInputSchemaOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpecOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec">DataAwsccBedrockPromptVariantsTemplateConfigurationChatToolConfigurationToolsToolSpec</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.chat">Chat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.text">Text</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfiguration">DataAwsccBedrockPromptVariantsTemplateConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Chat`<sup>Required</sup> <a name="Chat" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.chat"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference Chat { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationChatOutputReference</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.text"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference Text { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfiguration">DataAwsccBedrockPromptVariantsTemplateConfiguration</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint">DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePoint</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get"></a>

```csharp
private DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables">DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables">DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariables</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePoint">CachePoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList">DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3Location">TextS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationText">DataAwsccBedrockPromptVariantsTemplateConfigurationText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CachePoint`<sup>Required</sup> <a name="CachePoint" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.cachePoint"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference CachePoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextCachePointOutputReference</a>

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.inputVariables"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList InputVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList">DataAwsccBedrockPromptVariantsTemplateConfigurationTextInputVariablesList</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `TextS3Location`<sup>Required</sup> <a name="TextS3Location" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.textS3Location"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference TextS3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference">DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationText InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationText">DataAwsccBedrockPromptVariantsTemplateConfigurationText</a>

---


### DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference <a name="DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location">DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3LocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockPrompt.DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location">DataAwsccBedrockPromptVariantsTemplateConfigurationTextTextS3Location</a>

---



