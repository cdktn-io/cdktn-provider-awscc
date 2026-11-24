# `dataAwsccLambdaRuntimeVersion` Submodule <a name="`dataAwsccLambdaRuntimeVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaRuntimeVersion <a name="DataAwsccLambdaRuntimeVersion" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_version awscc_lambda_runtime_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaRuntimeVersion(Construct Scope, string Id, DataAwsccLambdaRuntimeVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig">DataAwsccLambdaRuntimeVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig">DataAwsccLambdaRuntimeVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLambdaRuntimeVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLambdaRuntimeVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLambdaRuntimeVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLambdaRuntimeVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLambdaRuntimeVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccLambdaRuntimeVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLambdaRuntimeVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLambdaRuntimeVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaRuntimeVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.compatibility">Compatibility</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference">DataAwsccLambdaRuntimeVersionCompatibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.platforms">Platforms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList">DataAwsccLambdaRuntimeVersionPlatformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.releaseNotes">ReleaseNotes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.resolvedUri">ResolvedUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.runtimeName">RuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Compatibility`<sup>Required</sup> <a name="Compatibility" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.compatibility"></a>

```csharp
public DataAwsccLambdaRuntimeVersionCompatibilityOutputReference Compatibility { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference">DataAwsccLambdaRuntimeVersionCompatibilityOutputReference</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Platforms`<sup>Required</sup> <a name="Platforms" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.platforms"></a>

```csharp
public DataAwsccLambdaRuntimeVersionPlatformsList Platforms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList">DataAwsccLambdaRuntimeVersionPlatformsList</a>

---

##### `ReleaseNotes`<sup>Required</sup> <a name="ReleaseNotes" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.releaseNotes"></a>

```csharp
public string ReleaseNotes { get; }
```

- *Type:* string

---

##### `ResolvedUri`<sup>Required</sup> <a name="ResolvedUri" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.resolvedUri"></a>

```csharp
public string ResolvedUri { get; }
```

- *Type:* string

---

##### `RuntimeName`<sup>Required</sup> <a name="RuntimeName" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.runtimeName"></a>

```csharp
public string RuntimeName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaRuntimeVersionCompatibility <a name="DataAwsccLambdaRuntimeVersionCompatibility" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibility"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibility.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaRuntimeVersionCompatibility {

};
```


### DataAwsccLambdaRuntimeVersionConfig <a name="DataAwsccLambdaRuntimeVersionConfig" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaRuntimeVersionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_version#id DataAwsccLambdaRuntimeVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaRuntimeVersionPlatforms <a name="DataAwsccLambdaRuntimeVersionPlatforms" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatforms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaRuntimeVersionPlatforms {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaRuntimeVersionCompatibilityOutputReference <a name="DataAwsccLambdaRuntimeVersionCompatibilityOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaRuntimeVersionCompatibilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.architectures">Architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.integrationModels">IntegrationModels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.managedInstances">ManagedInstances</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibility">DataAwsccLambdaRuntimeVersionCompatibility</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Architectures`<sup>Required</sup> <a name="Architectures" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.architectures"></a>

```csharp
public string[] Architectures { get; }
```

- *Type:* string[]

---

##### `IntegrationModels`<sup>Required</sup> <a name="IntegrationModels" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.integrationModels"></a>

```csharp
public string[] IntegrationModels { get; }
```

- *Type:* string[]

---

##### `ManagedInstances`<sup>Required</sup> <a name="ManagedInstances" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.managedInstances"></a>

```csharp
public string ManagedInstances { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLambdaRuntimeVersionCompatibility InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibility">DataAwsccLambdaRuntimeVersionCompatibility</a>

---


### DataAwsccLambdaRuntimeVersionPlatformsList <a name="DataAwsccLambdaRuntimeVersionPlatformsList" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaRuntimeVersionPlatformsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.get"></a>

```csharp
private DataAwsccLambdaRuntimeVersionPlatformsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccLambdaRuntimeVersionPlatformsOutputReference <a name="DataAwsccLambdaRuntimeVersionPlatformsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLambdaRuntimeVersionPlatformsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.digest">Digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.os">Os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatforms">DataAwsccLambdaRuntimeVersionPlatforms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.digest"></a>

```csharp
public string Digest { get; }
```

- *Type:* string

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.os"></a>

```csharp
public string Os { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLambdaRuntimeVersionPlatforms InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatforms">DataAwsccLambdaRuntimeVersionPlatforms</a>

---



