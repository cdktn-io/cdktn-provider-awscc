# `dataAwsccGrafanaWorkspace` Submodule <a name="`dataAwsccGrafanaWorkspace` Submodule" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGrafanaWorkspace <a name="DataAwsccGrafanaWorkspace" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/grafana_workspace awscc_grafana_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGrafanaWorkspace(Construct Scope, string Id, DataAwsccGrafanaWorkspaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig">DataAwsccGrafanaWorkspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig">DataAwsccGrafanaWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGrafanaWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGrafanaWorkspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGrafanaWorkspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGrafanaWorkspace.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGrafanaWorkspace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccGrafanaWorkspace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGrafanaWorkspace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGrafanaWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/grafana_workspace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGrafanaWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.accountAccessType">AccountAccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.authenticationProviders">AuthenticationProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.dataSources">DataSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.grafanaVersion">GrafanaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.modificationTimestamp">ModificationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.networkAccessControl">NetworkAccessControl</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference">DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.notificationDestinations">NotificationDestinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.organizationalUnits">OrganizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.organizationRoleName">OrganizationRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.permissionType">PermissionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.pluginAdminEnabled">PluginAdminEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.samlConfiguration">SamlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.samlConfigurationStatus">SamlConfigurationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.ssoClientId">SsoClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.stackSetName">StackSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList">DataAwsccGrafanaWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference">DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccountAccessType`<sup>Required</sup> <a name="AccountAccessType" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.accountAccessType"></a>

```csharp
public string AccountAccessType { get; }
```

- *Type:* string

---

##### `AuthenticationProviders`<sup>Required</sup> <a name="AuthenticationProviders" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.authenticationProviders"></a>

```csharp
public string[] AuthenticationProviders { get; }
```

- *Type:* string[]

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.dataSources"></a>

```csharp
public string[] DataSources { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `GrafanaVersion`<sup>Required</sup> <a name="GrafanaVersion" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.grafanaVersion"></a>

```csharp
public string GrafanaVersion { get; }
```

- *Type:* string

---

##### `ModificationTimestamp`<sup>Required</sup> <a name="ModificationTimestamp" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.modificationTimestamp"></a>

```csharp
public string ModificationTimestamp { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkAccessControl`<sup>Required</sup> <a name="NetworkAccessControl" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.networkAccessControl"></a>

```csharp
public DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference NetworkAccessControl { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference">DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference</a>

---

##### `NotificationDestinations`<sup>Required</sup> <a name="NotificationDestinations" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.notificationDestinations"></a>

```csharp
public string[] NotificationDestinations { get; }
```

- *Type:* string[]

---

##### `OrganizationalUnits`<sup>Required</sup> <a name="OrganizationalUnits" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.organizationalUnits"></a>

```csharp
public string[] OrganizationalUnits { get; }
```

- *Type:* string[]

---

##### `OrganizationRoleName`<sup>Required</sup> <a name="OrganizationRoleName" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.organizationRoleName"></a>

```csharp
public string OrganizationRoleName { get; }
```

- *Type:* string

---

##### `PermissionType`<sup>Required</sup> <a name="PermissionType" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.permissionType"></a>

```csharp
public string PermissionType { get; }
```

- *Type:* string

---

##### `PluginAdminEnabled`<sup>Required</sup> <a name="PluginAdminEnabled" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.pluginAdminEnabled"></a>

```csharp
public IResolvable PluginAdminEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SamlConfiguration`<sup>Required</sup> <a name="SamlConfiguration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.samlConfiguration"></a>

```csharp
public DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference SamlConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference</a>

---

##### `SamlConfigurationStatus`<sup>Required</sup> <a name="SamlConfigurationStatus" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.samlConfigurationStatus"></a>

```csharp
public string SamlConfigurationStatus { get; }
```

- *Type:* string

---

##### `SsoClientId`<sup>Required</sup> <a name="SsoClientId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.ssoClientId"></a>

```csharp
public string SsoClientId { get; }
```

- *Type:* string

---

##### `StackSetName`<sup>Required</sup> <a name="StackSetName" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.stackSetName"></a>

```csharp
public string StackSetName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.tags"></a>

```csharp
public DataAwsccGrafanaWorkspaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList">DataAwsccGrafanaWorkspaceTagsList</a>

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.vpcConfiguration"></a>

```csharp
public DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference VpcConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference">DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGrafanaWorkspaceConfig <a name="DataAwsccGrafanaWorkspaceConfig" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGrafanaWorkspaceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/grafana_workspace#id DataAwsccGrafanaWorkspace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGrafanaWorkspaceNetworkAccessControl <a name="DataAwsccGrafanaWorkspaceNetworkAccessControl" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGrafanaWorkspaceNetworkAccessControl {

};
```


### DataAwsccGrafanaWorkspaceSamlConfiguration <a name="DataAwsccGrafanaWorkspaceSamlConfiguration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGrafanaWorkspaceSamlConfiguration {

};
```


### DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes <a name="DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes {

};
```


### DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata <a name="DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata {

};
```


### DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues <a name="DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues {

};
```


### DataAwsccGrafanaWorkspaceTags <a name="DataAwsccGrafanaWorkspaceTags" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGrafanaWorkspaceTags {

};
```


### DataAwsccGrafanaWorkspaceVpcConfiguration <a name="DataAwsccGrafanaWorkspaceVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGrafanaWorkspaceVpcConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference <a name="DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIds">PrefixListIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIds">VpceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl">DataAwsccGrafanaWorkspaceNetworkAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixListIds`<sup>Required</sup> <a name="PrefixListIds" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIds"></a>

```csharp
public string[] PrefixListIds { get; }
```

- *Type:* string[]

---

##### `VpceIds`<sup>Required</sup> <a name="VpceIds" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIds"></a>

```csharp
public string[] VpceIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControlOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGrafanaWorkspaceNetworkAccessControl InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceNetworkAccessControl">DataAwsccGrafanaWorkspaceNetworkAccessControl</a>

---


### DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference <a name="DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groups">Groups</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.login">Login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.org">Org</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes">DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.groups"></a>

```csharp
public string Groups { get; }
```

- *Type:* string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.login"></a>

```csharp
public string Login { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Org`<sup>Required</sup> <a name="Org" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.org"></a>

```csharp
public string Org { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes">DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributes</a>

---


### DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference <a name="DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xml">Xml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata">DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Xml`<sup>Required</sup> <a name="Xml" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.xml"></a>

```csharp
public string Xml { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata">DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadata</a>

---


### DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference <a name="DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizations">AllowedOrganizations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributes">AssertionAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadata">IdpMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDuration">LoginValidityDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.roleValues">RoleValues</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration">DataAwsccGrafanaWorkspaceSamlConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedOrganizations`<sup>Required</sup> <a name="AllowedOrganizations" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.allowedOrganizations"></a>

```csharp
public string[] AllowedOrganizations { get; }
```

- *Type:* string[]

---

##### `AssertionAttributes`<sup>Required</sup> <a name="AssertionAttributes" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.assertionAttributes"></a>

```csharp
public DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference AssertionAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationAssertionAttributesOutputReference</a>

---

##### `IdpMetadata`<sup>Required</sup> <a name="IdpMetadata" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.idpMetadata"></a>

```csharp
public DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference IdpMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationIdpMetadataOutputReference</a>

---

##### `LoginValidityDuration`<sup>Required</sup> <a name="LoginValidityDuration" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.loginValidityDuration"></a>

```csharp
public double LoginValidityDuration { get; }
```

- *Type:* double

---

##### `RoleValues`<sup>Required</sup> <a name="RoleValues" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.roleValues"></a>

```csharp
public DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference RoleValues { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference">DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGrafanaWorkspaceSamlConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfiguration">DataAwsccGrafanaWorkspaceSamlConfiguration</a>

---


### DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference <a name="DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.admin">Admin</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editor">Editor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues">DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Admin`<sup>Required</sup> <a name="Admin" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.admin"></a>

```csharp
public string[] Admin { get; }
```

- *Type:* string[]

---

##### `Editor`<sup>Required</sup> <a name="Editor" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.editor"></a>

```csharp
public string[] Editor { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValuesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues">DataAwsccGrafanaWorkspaceSamlConfigurationRoleValues</a>

---


### DataAwsccGrafanaWorkspaceTagsList <a name="DataAwsccGrafanaWorkspaceTagsList" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGrafanaWorkspaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.get"></a>

```csharp
private DataAwsccGrafanaWorkspaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccGrafanaWorkspaceTagsOutputReference <a name="DataAwsccGrafanaWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGrafanaWorkspaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags">DataAwsccGrafanaWorkspaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGrafanaWorkspaceTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceTags">DataAwsccGrafanaWorkspaceTags</a>

---


### DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference <a name="DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration">DataAwsccGrafanaWorkspaceVpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGrafanaWorkspaceVpcConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGrafanaWorkspace.DataAwsccGrafanaWorkspaceVpcConfiguration">DataAwsccGrafanaWorkspaceVpcConfiguration</a>

---



