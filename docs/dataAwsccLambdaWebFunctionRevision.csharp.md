# `dataAwsccLambdaWebFunctionRevision` Submodule <a name="`dataAwsccLambdaWebFunctionRevision` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaWebFunctionRevision <a name="DataAwsccLambdaWebFunctionRevision" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/lambda_web_function_revision awscc_lambda_web_function_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionRevision(Construct Scope, string Id, DataAwsccLambdaWebFunctionRevisionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig">DataAwsccLambdaWebFunctionRevisionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig">DataAwsccLambdaWebFunctionRevisionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLambdaWebFunctionRevision resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLambdaWebFunctionRevision.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLambdaWebFunctionRevision.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLambdaWebFunctionRevision.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLambdaWebFunctionRevision.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccLambdaWebFunctionRevision resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLambdaWebFunctionRevision to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLambdaWebFunctionRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/lambda_web_function_revision#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaWebFunctionRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.buildConfig">BuildConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.functionArn">FunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.revisionArn">RevisionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.revisionId">RevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.serviceConfig">ServiceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.stateReason">StateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `BuildConfig`<sup>Required</sup> <a name="BuildConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.buildConfig"></a>

```csharp
public DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference BuildConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.functionArn"></a>

```csharp
public string FunctionArn { get; }
```

- *Type:* string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `RevisionArn`<sup>Required</sup> <a name="RevisionArn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.revisionArn"></a>

```csharp
public string RevisionArn { get; }
```

- *Type:* string

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.revisionId"></a>

```csharp
public string RevisionId { get; }
```

- *Type:* string

---

##### `ServiceConfig`<sup>Required</sup> <a name="ServiceConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.serviceConfig"></a>

```csharp
public DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference ServiceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.stateReason"></a>

```csharp
public string StateReason { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaWebFunctionRevisionBuildConfig <a name="DataAwsccLambdaWebFunctionRevisionBuildConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionRevisionBuildConfig {

};
```


### DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig {

};
```


### DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object {

};
```


### DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig {

};
```


### DataAwsccLambdaWebFunctionRevisionConfig <a name="DataAwsccLambdaWebFunctionRevisionConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionRevisionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/lambda_web_function_revision#id DataAwsccLambdaWebFunctionRevision#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaWebFunctionRevisionServiceConfig <a name="DataAwsccLambdaWebFunctionRevisionServiceConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionRevisionServiceConfig {

};
```


### DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig <a name="DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig {

};
```


### DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig <a name="DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object">S3Object</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Object`<sup>Required</sup> <a name="S3Object" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object"></a>

```csharp
public DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference S3Object { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig</a>

---


### DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

---


### DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfig">CodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfig">DataAwsccLambdaWebFunctionRevisionBuildConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeConfig`<sup>Required</sup> <a name="CodeConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfig"></a>

```csharp
public DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference CodeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference</a>

---

##### `RuntimeConfig`<sup>Required</sup> <a name="RuntimeConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig"></a>

```csharp
public DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference RuntimeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLambdaWebFunctionRevisionBuildConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfig">DataAwsccLambdaWebFunctionRevisionBuildConfig</a>

---


### DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig">DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig">DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

---


### DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment">MaxConcurrencyPerEnvironment</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig">TelemetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfig">DataAwsccLambdaWebFunctionRevisionServiceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariables"></a>

```csharp
public StringMap EnvironmentVariables { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `MaxConcurrencyPerEnvironment`<sup>Required</sup> <a name="MaxConcurrencyPerEnvironment" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment"></a>

```csharp
public double MaxConcurrencyPerEnvironment { get; }
```

- *Type:* double

---

##### `TelemetryConfig`<sup>Required</sup> <a name="TelemetryConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig"></a>

```csharp
public DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference TelemetryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference</a>

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLambdaWebFunctionRevisionServiceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfig">DataAwsccLambdaWebFunctionRevisionServiceConfig</a>

---


### DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel">ApplicationLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel">SystemLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationLogLevel`<sup>Required</sup> <a name="ApplicationLogLevel" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel"></a>

```csharp
public string ApplicationLogLevel { get; }
```

- *Type:* string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `SystemLogLevel`<sup>Required</sup> <a name="SystemLogLevel" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel"></a>

```csharp
public string SystemLogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

---


### DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig"></a>

```csharp
public DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

---



