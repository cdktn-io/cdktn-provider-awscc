# `dataAwsccSagemakerTrialComponent` Submodule <a name="`dataAwsccSagemakerTrialComponent` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerTrialComponent <a name="DataAwsccSagemakerTrialComponent" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_trial_component awscc_sagemaker_trial_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponent(Construct Scope, string Id, DataAwsccSagemakerTrialComponentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig">DataAwsccSagemakerTrialComponentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig">DataAwsccSagemakerTrialComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerTrialComponent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerTrialComponent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerTrialComponent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerTrialComponent.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerTrialComponent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSagemakerTrialComponent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerTrialComponent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerTrialComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_trial_component#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerTrialComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.inputArtifacts">InputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap">DataAwsccSagemakerTrialComponentInputArtifactsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.lineageGroupArn">LineageGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.metadataProperties">MetadataProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference">DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.outputArtifacts">OutputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap">DataAwsccSagemakerTrialComponentOutputArtifactsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap">DataAwsccSagemakerTrialComponentParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.status">Status</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference">DataAwsccSagemakerTrialComponentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList">DataAwsccSagemakerTrialComponentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.trialComponentArn">TrialComponentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.trialComponentName">TrialComponentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InputArtifacts`<sup>Required</sup> <a name="InputArtifacts" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.inputArtifacts"></a>

```csharp
public DataAwsccSagemakerTrialComponentInputArtifactsMap InputArtifacts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap">DataAwsccSagemakerTrialComponentInputArtifactsMap</a>

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `LineageGroupArn`<sup>Required</sup> <a name="LineageGroupArn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.lineageGroupArn"></a>

```csharp
public string LineageGroupArn { get; }
```

- *Type:* string

---

##### `MetadataProperties`<sup>Required</sup> <a name="MetadataProperties" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.metadataProperties"></a>

```csharp
public DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference MetadataProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference">DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference</a>

---

##### `OutputArtifacts`<sup>Required</sup> <a name="OutputArtifacts" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.outputArtifacts"></a>

```csharp
public DataAwsccSagemakerTrialComponentOutputArtifactsMap OutputArtifacts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap">DataAwsccSagemakerTrialComponentOutputArtifactsMap</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.parameters"></a>

```csharp
public DataAwsccSagemakerTrialComponentParametersMap Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap">DataAwsccSagemakerTrialComponentParametersMap</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.status"></a>

```csharp
public DataAwsccSagemakerTrialComponentStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference">DataAwsccSagemakerTrialComponentStatusOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.tags"></a>

```csharp
public DataAwsccSagemakerTrialComponentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList">DataAwsccSagemakerTrialComponentTagsList</a>

---

##### `TrialComponentArn`<sup>Required</sup> <a name="TrialComponentArn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.trialComponentArn"></a>

```csharp
public string TrialComponentArn { get; }
```

- *Type:* string

---

##### `TrialComponentName`<sup>Required</sup> <a name="TrialComponentName" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.trialComponentName"></a>

```csharp
public string TrialComponentName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerTrialComponentConfig <a name="DataAwsccSagemakerTrialComponentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_trial_component#id DataAwsccSagemakerTrialComponent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerTrialComponentInputArtifacts <a name="DataAwsccSagemakerTrialComponentInputArtifacts" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifacts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponentInputArtifacts {

};
```


### DataAwsccSagemakerTrialComponentMetadataProperties <a name="DataAwsccSagemakerTrialComponentMetadataProperties" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponentMetadataProperties {

};
```


### DataAwsccSagemakerTrialComponentOutputArtifacts <a name="DataAwsccSagemakerTrialComponentOutputArtifacts" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifacts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponentOutputArtifacts {

};
```


### DataAwsccSagemakerTrialComponentParameters <a name="DataAwsccSagemakerTrialComponentParameters" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponentParameters {

};
```


### DataAwsccSagemakerTrialComponentStatus <a name="DataAwsccSagemakerTrialComponentStatus" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponentStatus {

};
```


### DataAwsccSagemakerTrialComponentTags <a name="DataAwsccSagemakerTrialComponentTags" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponentTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerTrialComponentInputArtifactsMap <a name="DataAwsccSagemakerTrialComponentInputArtifactsMap" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponentInputArtifactsMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.get"></a>

```csharp
private DataAwsccSagemakerTrialComponentInputArtifactsOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerTrialComponentInputArtifactsOutputReference <a name="DataAwsccSagemakerTrialComponentInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponentInputArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.mediaType">MediaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifacts">DataAwsccSagemakerTrialComponentInputArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MediaType`<sup>Required</sup> <a name="MediaType" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.mediaType"></a>

```csharp
public string MediaType { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifactsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerTrialComponentInputArtifacts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentInputArtifacts">DataAwsccSagemakerTrialComponentInputArtifacts</a>

---


### DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference <a name="DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.commitId">CommitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.generatedBy">GeneratedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataProperties">DataAwsccSagemakerTrialComponentMetadataProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommitId`<sup>Required</sup> <a name="CommitId" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.commitId"></a>

```csharp
public string CommitId { get; }
```

- *Type:* string

---

##### `GeneratedBy`<sup>Required</sup> <a name="GeneratedBy" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.generatedBy"></a>

```csharp
public string GeneratedBy { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerTrialComponentMetadataProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentMetadataProperties">DataAwsccSagemakerTrialComponentMetadataProperties</a>

---


### DataAwsccSagemakerTrialComponentOutputArtifactsMap <a name="DataAwsccSagemakerTrialComponentOutputArtifactsMap" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponentOutputArtifactsMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.get"></a>

```csharp
private DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference <a name="DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.mediaType">MediaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifacts">DataAwsccSagemakerTrialComponentOutputArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MediaType`<sup>Required</sup> <a name="MediaType" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.mediaType"></a>

```csharp
public string MediaType { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifactsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerTrialComponentOutputArtifacts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentOutputArtifacts">DataAwsccSagemakerTrialComponentOutputArtifacts</a>

---


### DataAwsccSagemakerTrialComponentParametersMap <a name="DataAwsccSagemakerTrialComponentParametersMap" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponentParametersMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.get"></a>

```csharp
private DataAwsccSagemakerTrialComponentParametersOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerTrialComponentParametersOutputReference <a name="DataAwsccSagemakerTrialComponentParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponentParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.numberValue">NumberValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParameters">DataAwsccSagemakerTrialComponentParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumberValue`<sup>Required</sup> <a name="NumberValue" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.numberValue"></a>

```csharp
public double NumberValue { get; }
```

- *Type:* double

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerTrialComponentParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentParameters">DataAwsccSagemakerTrialComponentParameters</a>

---


### DataAwsccSagemakerTrialComponentStatusOutputReference <a name="DataAwsccSagemakerTrialComponentStatusOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponentStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.primaryStatus">PrimaryStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatus">DataAwsccSagemakerTrialComponentStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `PrimaryStatus`<sup>Required</sup> <a name="PrimaryStatus" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.primaryStatus"></a>

```csharp
public string PrimaryStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatusOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerTrialComponentStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentStatus">DataAwsccSagemakerTrialComponentStatus</a>

---


### DataAwsccSagemakerTrialComponentTagsList <a name="DataAwsccSagemakerTrialComponentTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.get"></a>

```csharp
private DataAwsccSagemakerTrialComponentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerTrialComponentTagsOutputReference <a name="DataAwsccSagemakerTrialComponentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerTrialComponentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTags">DataAwsccSagemakerTrialComponentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerTrialComponentTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerTrialComponent.DataAwsccSagemakerTrialComponentTags">DataAwsccSagemakerTrialComponentTags</a>

---



