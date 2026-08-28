# `dataAwsccCodedeployDeploymentGroup` Submodule <a name="`dataAwsccCodedeployDeploymentGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodedeployDeploymentGroup <a name="DataAwsccCodedeployDeploymentGroup" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codedeploy_deployment_group awscc_codedeploy_deployment_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroup(Construct Scope, string Id, DataAwsccCodedeployDeploymentGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig">DataAwsccCodedeployDeploymentGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig">DataAwsccCodedeployDeploymentGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCodedeployDeploymentGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodedeployDeploymentGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodedeployDeploymentGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodedeployDeploymentGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodedeployDeploymentGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCodedeployDeploymentGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCodedeployDeploymentGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCodedeployDeploymentGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codedeploy_deployment_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodedeployDeploymentGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.alarmConfiguration">AlarmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference">DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.autoRollbackConfiguration">AutoRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference">DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.autoScalingGroups">AutoScalingGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.blueGreenDeploymentConfiguration">BlueGreenDeploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference">DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.deployment">Deployment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference">DataAwsccCodedeployDeploymentGroupDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.deploymentConfigName">DeploymentConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.deploymentGroupName">DeploymentGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.deploymentStyle">DeploymentStyle</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference">DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.ec2TagFilters">Ec2TagFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList">DataAwsccCodedeployDeploymentGroupEc2TagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.ec2TagSet">Ec2TagSet</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference">DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.ecsServices">EcsServices</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList">DataAwsccCodedeployDeploymentGroupEcsServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.loadBalancerInfo">LoadBalancerInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.onPremisesInstanceTagFilters">OnPremisesInstanceTagFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList">DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.onPremisesTagSet">OnPremisesTagSet</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference">DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.outdatedInstancesStrategy">OutdatedInstancesStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.serviceRoleArn">ServiceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList">DataAwsccCodedeployDeploymentGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.terminationHookEnabled">TerminationHookEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.triggerConfigurations">TriggerConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList">DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AlarmConfiguration`<sup>Required</sup> <a name="AlarmConfiguration" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.alarmConfiguration"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference AlarmConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference">DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference</a>

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `AutoRollbackConfiguration`<sup>Required</sup> <a name="AutoRollbackConfiguration" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.autoRollbackConfiguration"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference AutoRollbackConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference">DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference</a>

---

##### `AutoScalingGroups`<sup>Required</sup> <a name="AutoScalingGroups" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.autoScalingGroups"></a>

```csharp
public string[] AutoScalingGroups { get; }
```

- *Type:* string[]

---

##### `BlueGreenDeploymentConfiguration`<sup>Required</sup> <a name="BlueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.blueGreenDeploymentConfiguration"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference BlueGreenDeploymentConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference">DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference</a>

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.deployment"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupDeploymentOutputReference Deployment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference">DataAwsccCodedeployDeploymentGroupDeploymentOutputReference</a>

---

##### `DeploymentConfigName`<sup>Required</sup> <a name="DeploymentConfigName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.deploymentConfigName"></a>

```csharp
public string DeploymentConfigName { get; }
```

- *Type:* string

---

##### `DeploymentGroupName`<sup>Required</sup> <a name="DeploymentGroupName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.deploymentGroupName"></a>

```csharp
public string DeploymentGroupName { get; }
```

- *Type:* string

---

##### `DeploymentStyle`<sup>Required</sup> <a name="DeploymentStyle" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.deploymentStyle"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference DeploymentStyle { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference">DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference</a>

---

##### `Ec2TagFilters`<sup>Required</sup> <a name="Ec2TagFilters" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.ec2TagFilters"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupEc2TagFiltersList Ec2TagFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList">DataAwsccCodedeployDeploymentGroupEc2TagFiltersList</a>

---

##### `Ec2TagSet`<sup>Required</sup> <a name="Ec2TagSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.ec2TagSet"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference Ec2TagSet { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference">DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference</a>

---

##### `EcsServices`<sup>Required</sup> <a name="EcsServices" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.ecsServices"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupEcsServicesList EcsServices { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList">DataAwsccCodedeployDeploymentGroupEcsServicesList</a>

---

##### `LoadBalancerInfo`<sup>Required</sup> <a name="LoadBalancerInfo" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.loadBalancerInfo"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference LoadBalancerInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference</a>

---

##### `OnPremisesInstanceTagFilters`<sup>Required</sup> <a name="OnPremisesInstanceTagFilters" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.onPremisesInstanceTagFilters"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList OnPremisesInstanceTagFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList">DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList</a>

---

##### `OnPremisesTagSet`<sup>Required</sup> <a name="OnPremisesTagSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.onPremisesTagSet"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference OnPremisesTagSet { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference">DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference</a>

---

##### `OutdatedInstancesStrategy`<sup>Required</sup> <a name="OutdatedInstancesStrategy" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.outdatedInstancesStrategy"></a>

```csharp
public string OutdatedInstancesStrategy { get; }
```

- *Type:* string

---

##### `ServiceRoleArn`<sup>Required</sup> <a name="ServiceRoleArn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.serviceRoleArn"></a>

```csharp
public string ServiceRoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.tags"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList">DataAwsccCodedeployDeploymentGroupTagsList</a>

---

##### `TerminationHookEnabled`<sup>Required</sup> <a name="TerminationHookEnabled" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.terminationHookEnabled"></a>

```csharp
public IResolvable TerminationHookEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TriggerConfigurations`<sup>Required</sup> <a name="TriggerConfigurations" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.triggerConfigurations"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList TriggerConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList">DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodedeployDeploymentGroupAlarmConfiguration <a name="DataAwsccCodedeployDeploymentGroupAlarmConfiguration" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupAlarmConfiguration {

};
```


### DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarms <a name="DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarms" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarms {

};
```


### DataAwsccCodedeployDeploymentGroupAutoRollbackConfiguration <a name="DataAwsccCodedeployDeploymentGroupAutoRollbackConfiguration" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupAutoRollbackConfiguration {

};
```


### DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfiguration <a name="DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfiguration" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfiguration {

};
```


### DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption <a name="DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption {

};
```


### DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption <a name="DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption {

};
```


### DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess <a name="DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess {

};
```


### DataAwsccCodedeployDeploymentGroupConfig <a name="DataAwsccCodedeployDeploymentGroupConfig" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codedeploy_deployment_group#id DataAwsccCodedeployDeploymentGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodedeployDeploymentGroupDeployment <a name="DataAwsccCodedeployDeploymentGroupDeployment" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupDeployment {

};
```


### DataAwsccCodedeployDeploymentGroupDeploymentRevision <a name="DataAwsccCodedeployDeploymentGroupDeploymentRevision" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevision.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupDeploymentRevision {

};
```


### DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocation <a name="DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocation" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocation {

};
```


### DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3Location <a name="DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3Location" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3Location {

};
```


### DataAwsccCodedeployDeploymentGroupDeploymentStyle <a name="DataAwsccCodedeployDeploymentGroupDeploymentStyle" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupDeploymentStyle {

};
```


### DataAwsccCodedeployDeploymentGroupEc2TagFilters <a name="DataAwsccCodedeployDeploymentGroupEc2TagFilters" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupEc2TagFilters {

};
```


### DataAwsccCodedeployDeploymentGroupEc2TagSet <a name="DataAwsccCodedeployDeploymentGroupEc2TagSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupEc2TagSet {

};
```


### DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup <a name="DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup {

};
```


### DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct <a name="DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct {

};
```


### DataAwsccCodedeployDeploymentGroupEcsServices <a name="DataAwsccCodedeployDeploymentGroupEcsServices" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupEcsServices {

};
```


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfo <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfo" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfo {

};
```


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct {

};
```


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct {

};
```


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute {

};
```


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct {

};
```


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups {

};
```


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute {

};
```


### DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFilters <a name="DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFilters" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFilters {

};
```


### DataAwsccCodedeployDeploymentGroupOnPremisesTagSet <a name="DataAwsccCodedeployDeploymentGroupOnPremisesTagSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupOnPremisesTagSet {

};
```


### DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup <a name="DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup {

};
```


### DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct <a name="DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct {

};
```


### DataAwsccCodedeployDeploymentGroupTags <a name="DataAwsccCodedeployDeploymentGroupTags" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupTags {

};
```


### DataAwsccCodedeployDeploymentGroupTriggerConfigurations <a name="DataAwsccCodedeployDeploymentGroupTriggerConfigurations" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupTriggerConfigurations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList <a name="DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.get"></a>

```csharp
private DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference <a name="DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarms">DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarms InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarms">DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarms</a>

---


### DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference <a name="DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarms">Alarms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList">DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailure">IgnorePollAlarmFailure</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfiguration">DataAwsccCodedeployDeploymentGroupAlarmConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.property.alarms"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList Alarms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList">DataAwsccCodedeployDeploymentGroupAlarmConfigurationAlarmsList</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IgnorePollAlarmFailure`<sup>Required</sup> <a name="IgnorePollAlarmFailure" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.property.ignorePollAlarmFailure"></a>

```csharp
public IResolvable IgnorePollAlarmFailure { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupAlarmConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAlarmConfiguration">DataAwsccCodedeployDeploymentGroupAlarmConfiguration</a>

---


### DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference <a name="DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.events">Events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfiguration">DataAwsccCodedeployDeploymentGroupAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.events"></a>

```csharp
public string[] Events { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupAutoRollbackConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupAutoRollbackConfiguration">DataAwsccCodedeployDeploymentGroupAutoRollbackConfiguration</a>

---


### DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference <a name="DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeout">ActionOnTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutes">WaitTimeInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionOnTimeout`<sup>Required</sup> <a name="ActionOnTimeout" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.actionOnTimeout"></a>

```csharp
public string ActionOnTimeout { get; }
```

- *Type:* string

---

##### `WaitTimeInMinutes`<sup>Required</sup> <a name="WaitTimeInMinutes" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.waitTimeInMinutes"></a>

```csharp
public double WaitTimeInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption">DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOption</a>

---


### DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference <a name="DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption">DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOption</a>

---


### DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference <a name="DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOption">DeploymentReadyOption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference">DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOption">GreenFleetProvisioningOption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference">DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccess">TerminateBlueInstancesOnDeploymentSuccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference">DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfiguration">DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentReadyOption`<sup>Required</sup> <a name="DeploymentReadyOption" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.deploymentReadyOption"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference DeploymentReadyOption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference">DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationDeploymentReadyOptionOutputReference</a>

---

##### `GreenFleetProvisioningOption`<sup>Required</sup> <a name="GreenFleetProvisioningOption" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.greenFleetProvisioningOption"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference GreenFleetProvisioningOption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference">DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationGreenFleetProvisioningOptionOutputReference</a>

---

##### `TerminateBlueInstancesOnDeploymentSuccess`<sup>Required</sup> <a name="TerminateBlueInstancesOnDeploymentSuccess" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.terminateBlueInstancesOnDeploymentSuccess"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference TerminateBlueInstancesOnDeploymentSuccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference">DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfiguration">DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfiguration</a>

---


### DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference <a name="DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutes">TerminationWaitTimeInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `TerminationWaitTimeInMinutes`<sup>Required</sup> <a name="TerminationWaitTimeInMinutes" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.terminationWaitTimeInMinutes"></a>

```csharp
public double TerminationWaitTimeInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccessOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess">DataAwsccCodedeployDeploymentGroupBlueGreenDeploymentConfigurationTerminateBlueInstancesOnDeploymentSuccess</a>

---


### DataAwsccCodedeployDeploymentGroupDeploymentOutputReference <a name="DataAwsccCodedeployDeploymentGroupDeploymentOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailures">IgnoreApplicationStopFailures</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.property.revision">Revision</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference">DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeployment">DataAwsccCodedeployDeploymentGroupDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IgnoreApplicationStopFailures`<sup>Required</sup> <a name="IgnoreApplicationStopFailures" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.property.ignoreApplicationStopFailures"></a>

```csharp
public IResolvable IgnoreApplicationStopFailures { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.property.revision"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference Revision { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference">DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeployment">DataAwsccCodedeployDeploymentGroupDeployment</a>

---


### DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference <a name="DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitId">CommitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocation">DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommitId`<sup>Required</sup> <a name="CommitId" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.commitId"></a>

```csharp
public string CommitId { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocation">DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocation</a>

---


### DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference <a name="DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocation">GitHubLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference">DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionType">RevisionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference">DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevision">DataAwsccCodedeployDeploymentGroupDeploymentRevision</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GitHubLocation`<sup>Required</sup> <a name="GitHubLocation" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.property.gitHubLocation"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference GitHubLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference">DataAwsccCodedeployDeploymentGroupDeploymentRevisionGitHubLocationOutputReference</a>

---

##### `RevisionType`<sup>Required</sup> <a name="RevisionType" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.property.revisionType"></a>

```csharp
public string RevisionType { get; }
```

- *Type:* string

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.property.s3Location"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference S3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference">DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupDeploymentRevision InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevision">DataAwsccCodedeployDeploymentGroupDeploymentRevision</a>

---


### DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference <a name="DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleType">BundleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTag">ETag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3Location">DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BundleType`<sup>Required</sup> <a name="BundleType" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.bundleType"></a>

```csharp
public string BundleType { get; }
```

- *Type:* string

---

##### `ETag`<sup>Required</sup> <a name="ETag" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.eTag"></a>

```csharp
public string ETag { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3LocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3Location InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3Location">DataAwsccCodedeployDeploymentGroupDeploymentRevisionS3Location</a>

---


### DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference <a name="DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOption">DeploymentOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyle">DataAwsccCodedeployDeploymentGroupDeploymentStyle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentOption`<sup>Required</sup> <a name="DeploymentOption" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentOption"></a>

```csharp
public string DeploymentOption { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyleOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupDeploymentStyle InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupDeploymentStyle">DataAwsccCodedeployDeploymentGroupDeploymentStyle</a>

---


### DataAwsccCodedeployDeploymentGroupEc2TagFiltersList <a name="DataAwsccCodedeployDeploymentGroupEc2TagFiltersList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupEc2TagFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.get"></a>

```csharp
private DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference <a name="DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFilters">DataAwsccCodedeployDeploymentGroupEc2TagFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupEc2TagFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagFilters">DataAwsccCodedeployDeploymentGroupEc2TagFilters</a>

---


### DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList <a name="DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.get"></a>

```csharp
private DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference <a name="DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup">DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroup</a>

---


### DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList <a name="DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.get"></a>

```csharp
private DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference <a name="DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroup">Ec2TagGroup</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList">DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ec2TagGroup`<sup>Required</sup> <a name="Ec2TagGroup" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.ec2TagGroup"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList Ec2TagGroup { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList">DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListEc2TagGroupList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct">DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStruct</a>

---


### DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference <a name="DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetList">Ec2TagSetList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList">DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSet">DataAwsccCodedeployDeploymentGroupEc2TagSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ec2TagSetList`<sup>Required</sup> <a name="Ec2TagSetList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.property.ec2TagSetList"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList Ec2TagSetList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList">DataAwsccCodedeployDeploymentGroupEc2TagSetEc2TagSetListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSetOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupEc2TagSet InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEc2TagSet">DataAwsccCodedeployDeploymentGroupEc2TagSet</a>

---


### DataAwsccCodedeployDeploymentGroupEcsServicesList <a name="DataAwsccCodedeployDeploymentGroupEcsServicesList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupEcsServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.get"></a>

```csharp
private DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference <a name="DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServices">DataAwsccCodedeployDeploymentGroupEcsServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServicesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupEcsServices InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupEcsServices">DataAwsccCodedeployDeploymentGroupEcsServices</a>

---


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.get"></a>

```csharp
private DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStruct</a>

---


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoList">ElbInfoList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoList">TargetGroupInfoList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoList">TargetGroupPairInfoList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfo">DataAwsccCodedeployDeploymentGroupLoadBalancerInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElbInfoList`<sup>Required</sup> <a name="ElbInfoList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.elbInfoList"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList ElbInfoList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoElbInfoListStructList</a>

---

##### `TargetGroupInfoList`<sup>Required</sup> <a name="TargetGroupInfoList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupInfoList"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList TargetGroupInfoList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList</a>

---

##### `TargetGroupPairInfoList`<sup>Required</sup> <a name="TargetGroupPairInfoList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.targetGroupPairInfoList"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList TargetGroupPairInfoList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupLoadBalancerInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfo">DataAwsccCodedeployDeploymentGroupLoadBalancerInfo</a>

---


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.get"></a>

```csharp
private DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStructOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoListStruct</a>

---


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArns">ListenerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ListenerArns`<sup>Required</sup> <a name="ListenerArns" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.listenerArns"></a>

```csharp
public string[] ListenerArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRoute</a>

---


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.get"></a>

```csharp
private DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRoute">ProdTrafficRoute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroups">TargetGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRoute">TestTrafficRoute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProdTrafficRoute`<sup>Required</sup> <a name="ProdTrafficRoute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.prodTrafficRoute"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference ProdTrafficRoute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListProdTrafficRouteOutputReference</a>

---

##### `TargetGroups`<sup>Required</sup> <a name="TargetGroups" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.targetGroups"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList TargetGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList</a>

---

##### `TestTrafficRoute`<sup>Required</sup> <a name="TestTrafficRoute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.testTrafficRoute"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference TestTrafficRoute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStructOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListStruct</a>

---


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.get"></a>

```csharp
private DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroupsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTargetGroups</a>

---


### DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference <a name="DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArns">ListenerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ListenerArns`<sup>Required</sup> <a name="ListenerArns" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.listenerArns"></a>

```csharp
public string[] ListenerArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRouteOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute">DataAwsccCodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoListTestTrafficRoute</a>

---


### DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList <a name="DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.get"></a>

```csharp
private DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference <a name="DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFilters">DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFilters">DataAwsccCodedeployDeploymentGroupOnPremisesInstanceTagFilters</a>

---


### DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList <a name="DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.get"></a>

```csharp
private DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference <a name="DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup">DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroup</a>

---


### DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList <a name="DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.get"></a>

```csharp
private DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference <a name="DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroup">OnPremisesTagGroup</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList">DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnPremisesTagGroup`<sup>Required</sup> <a name="OnPremisesTagGroup" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.onPremisesTagGroup"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList OnPremisesTagGroup { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList">DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListOnPremisesTagGroupList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct">DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStruct</a>

---


### DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference <a name="DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetList">OnPremisesTagSetList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList">DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSet">DataAwsccCodedeployDeploymentGroupOnPremisesTagSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnPremisesTagSetList`<sup>Required</sup> <a name="OnPremisesTagSetList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.onPremisesTagSetList"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList OnPremisesTagSetList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList">DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOnPremisesTagSetListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSetOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupOnPremisesTagSet InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupOnPremisesTagSet">DataAwsccCodedeployDeploymentGroupOnPremisesTagSet</a>

---


### DataAwsccCodedeployDeploymentGroupTagsList <a name="DataAwsccCodedeployDeploymentGroupTagsList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.get"></a>

```csharp
private DataAwsccCodedeployDeploymentGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodedeployDeploymentGroupTagsOutputReference <a name="DataAwsccCodedeployDeploymentGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTags">DataAwsccCodedeployDeploymentGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTags">DataAwsccCodedeployDeploymentGroupTags</a>

---


### DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList <a name="DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.get"></a>

```csharp
private DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference <a name="DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEvents">TriggerEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerName">TriggerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArn">TriggerTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurations">DataAwsccCodedeployDeploymentGroupTriggerConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TriggerEvents`<sup>Required</sup> <a name="TriggerEvents" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerEvents"></a>

```csharp
public string[] TriggerEvents { get; }
```

- *Type:* string[]

---

##### `TriggerName`<sup>Required</sup> <a name="TriggerName" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerName"></a>

```csharp
public string TriggerName { get; }
```

- *Type:* string

---

##### `TriggerTargetArn`<sup>Required</sup> <a name="TriggerTargetArn" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.triggerTargetArn"></a>

```csharp
public string TriggerTargetArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodedeployDeploymentGroupTriggerConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodedeployDeploymentGroup.DataAwsccCodedeployDeploymentGroupTriggerConfigurations">DataAwsccCodedeployDeploymentGroupTriggerConfigurations</a>

---



