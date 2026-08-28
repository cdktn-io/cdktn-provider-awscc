# `dataAwsccProtonEnvironmentAccountConnection` Submodule <a name="`dataAwsccProtonEnvironmentAccountConnection` Submodule" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccProtonEnvironmentAccountConnection <a name="DataAwsccProtonEnvironmentAccountConnection" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/proton_environment_account_connection awscc_proton_environment_account_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccProtonEnvironmentAccountConnection(Construct Scope, string Id, DataAwsccProtonEnvironmentAccountConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig">DataAwsccProtonEnvironmentAccountConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig">DataAwsccProtonEnvironmentAccountConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccProtonEnvironmentAccountConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccProtonEnvironmentAccountConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccProtonEnvironmentAccountConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccProtonEnvironmentAccountConnection.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccProtonEnvironmentAccountConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccProtonEnvironmentAccountConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccProtonEnvironmentAccountConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccProtonEnvironmentAccountConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/proton_environment_account_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccProtonEnvironmentAccountConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.codebuildRoleArn">CodebuildRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.componentRoleArn">ComponentRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.environmentAccountConnectionId">EnvironmentAccountConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.environmentAccountId">EnvironmentAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.environmentName">EnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.managementAccountId">ManagementAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList">DataAwsccProtonEnvironmentAccountConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CodebuildRoleArn`<sup>Required</sup> <a name="CodebuildRoleArn" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.codebuildRoleArn"></a>

```csharp
public string CodebuildRoleArn { get; }
```

- *Type:* string

---

##### `ComponentRoleArn`<sup>Required</sup> <a name="ComponentRoleArn" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.componentRoleArn"></a>

```csharp
public string ComponentRoleArn { get; }
```

- *Type:* string

---

##### `EnvironmentAccountConnectionId`<sup>Required</sup> <a name="EnvironmentAccountConnectionId" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.environmentAccountConnectionId"></a>

```csharp
public string EnvironmentAccountConnectionId { get; }
```

- *Type:* string

---

##### `EnvironmentAccountId`<sup>Required</sup> <a name="EnvironmentAccountId" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.environmentAccountId"></a>

```csharp
public string EnvironmentAccountId { get; }
```

- *Type:* string

---

##### `EnvironmentName`<sup>Required</sup> <a name="EnvironmentName" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.environmentName"></a>

```csharp
public string EnvironmentName { get; }
```

- *Type:* string

---

##### `ManagementAccountId`<sup>Required</sup> <a name="ManagementAccountId" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.managementAccountId"></a>

```csharp
public string ManagementAccountId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.tags"></a>

```csharp
public DataAwsccProtonEnvironmentAccountConnectionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList">DataAwsccProtonEnvironmentAccountConnectionTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccProtonEnvironmentAccountConnectionConfig <a name="DataAwsccProtonEnvironmentAccountConnectionConfig" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccProtonEnvironmentAccountConnectionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/proton_environment_account_connection#id DataAwsccProtonEnvironmentAccountConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccProtonEnvironmentAccountConnectionTags <a name="DataAwsccProtonEnvironmentAccountConnectionTags" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccProtonEnvironmentAccountConnectionTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccProtonEnvironmentAccountConnectionTagsList <a name="DataAwsccProtonEnvironmentAccountConnectionTagsList" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccProtonEnvironmentAccountConnectionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.get"></a>

```csharp
private DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference <a name="DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTags">DataAwsccProtonEnvironmentAccountConnectionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccProtonEnvironmentAccountConnectionTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnection.DataAwsccProtonEnvironmentAccountConnectionTags">DataAwsccProtonEnvironmentAccountConnectionTags</a>

---



