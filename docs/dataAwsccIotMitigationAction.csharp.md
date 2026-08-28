# `dataAwsccIotMitigationAction` Submodule <a name="`dataAwsccIotMitigationAction` Submodule" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotMitigationAction <a name="DataAwsccIotMitigationAction" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_mitigation_action awscc_iot_mitigation_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationAction(Construct Scope, string Id, DataAwsccIotMitigationActionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig">DataAwsccIotMitigationActionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig">DataAwsccIotMitigationActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotMitigationAction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotMitigationAction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotMitigationAction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotMitigationAction.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotMitigationAction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccIotMitigationAction resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotMitigationAction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotMitigationAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_mitigation_action#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotMitigationAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.actionParams">ActionParams</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference">DataAwsccIotMitigationActionActionParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.mitigationActionArn">MitigationActionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.mitigationActionId">MitigationActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList">DataAwsccIotMitigationActionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `ActionParams`<sup>Required</sup> <a name="ActionParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.actionParams"></a>

```csharp
public DataAwsccIotMitigationActionActionParamsOutputReference ActionParams { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference">DataAwsccIotMitigationActionActionParamsOutputReference</a>

---

##### `MitigationActionArn`<sup>Required</sup> <a name="MitigationActionArn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.mitigationActionArn"></a>

```csharp
public string MitigationActionArn { get; }
```

- *Type:* string

---

##### `MitigationActionId`<sup>Required</sup> <a name="MitigationActionId" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.mitigationActionId"></a>

```csharp
public string MitigationActionId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.tags"></a>

```csharp
public DataAwsccIotMitigationActionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList">DataAwsccIotMitigationActionTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationAction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotMitigationActionActionParams <a name="DataAwsccIotMitigationActionActionParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionActionParams {

};
```


### DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams <a name="DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams {

};
```


### DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams <a name="DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams {

};
```


### DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams <a name="DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams {

};
```


### DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams <a name="DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams {

};
```


### DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams <a name="DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams {

};
```


### DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams <a name="DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams {

};
```


### DataAwsccIotMitigationActionConfig <a name="DataAwsccIotMitigationActionConfig" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_mitigation_action#id DataAwsccIotMitigationAction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotMitigationActionTags <a name="DataAwsccIotMitigationActionTags" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference <a name="DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroups">OverrideDynamicGroups</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNames">ThingGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams">DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OverrideDynamicGroups`<sup>Required</sup> <a name="OverrideDynamicGroups" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroups"></a>

```csharp
public IResolvable OverrideDynamicGroups { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ThingGroupNames`<sup>Required</sup> <a name="ThingGroupNames" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNames"></a>

```csharp
public string[] ThingGroupNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams">DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParams</a>

---


### DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference <a name="DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLogging">RoleArnForLogging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams">DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `RoleArnForLogging`<sup>Required</sup> <a name="RoleArnForLogging" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLogging"></a>

```csharp
public string RoleArnForLogging { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams">DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParams</a>

---


### DataAwsccIotMitigationActionActionParamsOutputReference <a name="DataAwsccIotMitigationActionActionParamsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionActionParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParams">AddThingsToThingGroupParams</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference">DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParams">EnableIoTLoggingParams</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference">DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParams">PublishFindingToSnsParams</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference">DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParams">ReplaceDefaultPolicyVersionParams</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference">DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.updateCaCertificateParams">UpdateCaCertificateParams</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference">DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParams">UpdateDeviceCertificateParams</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference">DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParams">DataAwsccIotMitigationActionActionParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddThingsToThingGroupParams`<sup>Required</sup> <a name="AddThingsToThingGroupParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParams"></a>

```csharp
public DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference AddThingsToThingGroupParams { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference">DataAwsccIotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference</a>

---

##### `EnableIoTLoggingParams`<sup>Required</sup> <a name="EnableIoTLoggingParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParams"></a>

```csharp
public DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference EnableIoTLoggingParams { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference">DataAwsccIotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference</a>

---

##### `PublishFindingToSnsParams`<sup>Required</sup> <a name="PublishFindingToSnsParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParams"></a>

```csharp
public DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference PublishFindingToSnsParams { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference">DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference</a>

---

##### `ReplaceDefaultPolicyVersionParams`<sup>Required</sup> <a name="ReplaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParams"></a>

```csharp
public DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference ReplaceDefaultPolicyVersionParams { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference">DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference</a>

---

##### `UpdateCaCertificateParams`<sup>Required</sup> <a name="UpdateCaCertificateParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.updateCaCertificateParams"></a>

```csharp
public DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference UpdateCaCertificateParams { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference">DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference</a>

---

##### `UpdateDeviceCertificateParams`<sup>Required</sup> <a name="UpdateDeviceCertificateParams" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParams"></a>

```csharp
public DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference UpdateDeviceCertificateParams { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference">DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotMitigationActionActionParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParams">DataAwsccIotMitigationActionActionParams</a>

---


### DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference <a name="DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams">DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams">DataAwsccIotMitigationActionActionParamsPublishFindingToSnsParams</a>

---


### DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference <a name="DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">DataAwsccIotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a>

---


### DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference <a name="DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams">DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams">DataAwsccIotMitigationActionActionParamsUpdateCaCertificateParams</a>

---


### DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference <a name="DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams">DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams">DataAwsccIotMitigationActionActionParamsUpdateDeviceCertificateParams</a>

---


### DataAwsccIotMitigationActionTagsList <a name="DataAwsccIotMitigationActionTagsList" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.get"></a>

```csharp
private DataAwsccIotMitigationActionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotMitigationActionTagsOutputReference <a name="DataAwsccIotMitigationActionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotMitigationActionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTags">DataAwsccIotMitigationActionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotMitigationActionTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotMitigationAction.DataAwsccIotMitigationActionTags">DataAwsccIotMitigationActionTags</a>

---



