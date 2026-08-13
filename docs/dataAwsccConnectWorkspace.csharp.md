# `dataAwsccConnectWorkspace` Submodule <a name="`dataAwsccConnectWorkspace` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectWorkspace <a name="DataAwsccConnectWorkspace" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_workspace awscc_connect_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspace(Construct Scope, string Id, DataAwsccConnectWorkspaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig">DataAwsccConnectWorkspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig">DataAwsccConnectWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccConnectWorkspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccConnectWorkspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccConnectWorkspace.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccConnectWorkspace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccConnectWorkspace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccConnectWorkspace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccConnectWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_workspace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.associations">Associations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.media">Media</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList">DataAwsccConnectWorkspaceMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.pages">Pages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList">DataAwsccConnectWorkspacePagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList">DataAwsccConnectWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.theme">Theme</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference">DataAwsccConnectWorkspaceThemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Associations`<sup>Required</sup> <a name="Associations" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.associations"></a>

```csharp
public string[] Associations { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `Media`<sup>Required</sup> <a name="Media" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.media"></a>

```csharp
public DataAwsccConnectWorkspaceMediaList Media { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList">DataAwsccConnectWorkspaceMediaList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Pages`<sup>Required</sup> <a name="Pages" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.pages"></a>

```csharp
public DataAwsccConnectWorkspacePagesList Pages { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList">DataAwsccConnectWorkspacePagesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.tags"></a>

```csharp
public DataAwsccConnectWorkspaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList">DataAwsccConnectWorkspaceTagsList</a>

---

##### `Theme`<sup>Required</sup> <a name="Theme" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.theme"></a>

```csharp
public DataAwsccConnectWorkspaceThemeOutputReference Theme { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference">DataAwsccConnectWorkspaceThemeOutputReference</a>

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectWorkspaceConfig <a name="DataAwsccConnectWorkspaceConfig" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_workspace#id DataAwsccConnectWorkspace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectWorkspaceMedia <a name="DataAwsccConnectWorkspaceMedia" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMedia.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceMedia {

};
```


### DataAwsccConnectWorkspacePages <a name="DataAwsccConnectWorkspacePages" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePages.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspacePages {

};
```


### DataAwsccConnectWorkspaceTags <a name="DataAwsccConnectWorkspaceTags" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceTags {

};
```


### DataAwsccConnectWorkspaceTheme <a name="DataAwsccConnectWorkspaceTheme" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTheme.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceTheme {

};
```


### DataAwsccConnectWorkspaceThemeDark <a name="DataAwsccConnectWorkspaceThemeDark" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDark"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDark.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeDark {

};
```


### DataAwsccConnectWorkspaceThemeDarkPalette <a name="DataAwsccConnectWorkspaceThemeDarkPalette" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalette.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeDarkPalette {

};
```


### DataAwsccConnectWorkspaceThemeDarkPaletteCanvas <a name="DataAwsccConnectWorkspaceThemeDarkPaletteCanvas" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvas.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeDarkPaletteCanvas {

};
```


### DataAwsccConnectWorkspaceThemeDarkPaletteHeader <a name="DataAwsccConnectWorkspaceThemeDarkPaletteHeader" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeDarkPaletteHeader {

};
```


### DataAwsccConnectWorkspaceThemeDarkPaletteNavigation <a name="DataAwsccConnectWorkspaceThemeDarkPaletteNavigation" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeDarkPaletteNavigation {

};
```


### DataAwsccConnectWorkspaceThemeDarkPalettePrimary <a name="DataAwsccConnectWorkspaceThemeDarkPalettePrimary" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeDarkPalettePrimary {

};
```


### DataAwsccConnectWorkspaceThemeDarkTypography <a name="DataAwsccConnectWorkspaceThemeDarkTypography" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypography.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeDarkTypography {

};
```


### DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily <a name="DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily {

};
```


### DataAwsccConnectWorkspaceThemeLight <a name="DataAwsccConnectWorkspaceThemeLight" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLight.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeLight {

};
```


### DataAwsccConnectWorkspaceThemeLightPalette <a name="DataAwsccConnectWorkspaceThemeLightPalette" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalette.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeLightPalette {

};
```


### DataAwsccConnectWorkspaceThemeLightPaletteCanvas <a name="DataAwsccConnectWorkspaceThemeLightPaletteCanvas" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvas.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeLightPaletteCanvas {

};
```


### DataAwsccConnectWorkspaceThemeLightPaletteHeader <a name="DataAwsccConnectWorkspaceThemeLightPaletteHeader" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeLightPaletteHeader {

};
```


### DataAwsccConnectWorkspaceThemeLightPaletteNavigation <a name="DataAwsccConnectWorkspaceThemeLightPaletteNavigation" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeLightPaletteNavigation {

};
```


### DataAwsccConnectWorkspaceThemeLightPalettePrimary <a name="DataAwsccConnectWorkspaceThemeLightPalettePrimary" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeLightPalettePrimary {

};
```


### DataAwsccConnectWorkspaceThemeLightTypography <a name="DataAwsccConnectWorkspaceThemeLightTypography" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypography.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeLightTypography {

};
```


### DataAwsccConnectWorkspaceThemeLightTypographyFontFamily <a name="DataAwsccConnectWorkspaceThemeLightTypographyFontFamily" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamily.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeLightTypographyFontFamily {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectWorkspaceMediaList <a name="DataAwsccConnectWorkspaceMediaList" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceMediaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.get"></a>

```csharp
private DataAwsccConnectWorkspaceMediaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccConnectWorkspaceMediaOutputReference <a name="DataAwsccConnectWorkspaceMediaOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceMediaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMedia">DataAwsccConnectWorkspaceMedia</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMediaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceMedia InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceMedia">DataAwsccConnectWorkspaceMedia</a>

---


### DataAwsccConnectWorkspacePagesList <a name="DataAwsccConnectWorkspacePagesList" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspacePagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.get"></a>

```csharp
private DataAwsccConnectWorkspacePagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccConnectWorkspacePagesOutputReference <a name="DataAwsccConnectWorkspacePagesOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspacePagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.inputData">InputData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.page">Page</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.slug">Slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePages">DataAwsccConnectWorkspacePages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputData`<sup>Required</sup> <a name="InputData" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.inputData"></a>

```csharp
public string InputData { get; }
```

- *Type:* string

---

##### `Page`<sup>Required</sup> <a name="Page" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.page"></a>

```csharp
public string Page { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.slug"></a>

```csharp
public string Slug { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePagesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspacePages InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspacePages">DataAwsccConnectWorkspacePages</a>

---


### DataAwsccConnectWorkspaceTagsList <a name="DataAwsccConnectWorkspaceTagsList" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.get"></a>

```csharp
private DataAwsccConnectWorkspaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccConnectWorkspaceTagsOutputReference <a name="DataAwsccConnectWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTags">DataAwsccConnectWorkspaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTags">DataAwsccConnectWorkspaceTags</a>

---


### DataAwsccConnectWorkspaceThemeDarkOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeDarkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.palette">Palette</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.typography">Typography</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference">DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDark">DataAwsccConnectWorkspaceThemeDark</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Palette`<sup>Required</sup> <a name="Palette" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.palette"></a>

```csharp
public DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference Palette { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference</a>

---

##### `Typography`<sup>Required</sup> <a name="Typography" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.typography"></a>

```csharp
public DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference Typography { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference">DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceThemeDark InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDark">DataAwsccConnectWorkspaceThemeDark</a>

---


### DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackground">ActiveBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackground">ContainerBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackground">PageBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvas">DataAwsccConnectWorkspaceThemeDarkPaletteCanvas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveBackground`<sup>Required</sup> <a name="ActiveBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackground"></a>

```csharp
public string ActiveBackground { get; }
```

- *Type:* string

---

##### `ContainerBackground`<sup>Required</sup> <a name="ContainerBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackground"></a>

```csharp
public string ContainerBackground { get; }
```

- *Type:* string

---

##### `PageBackground`<sup>Required</sup> <a name="PageBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackground"></a>

```csharp
public string PageBackground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceThemeDarkPaletteCanvas InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvas">DataAwsccConnectWorkspaceThemeDarkPaletteCanvas</a>

---


### DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColors">InvertActionsColors</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHover">TextHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeader">DataAwsccConnectWorkspaceThemeDarkPaletteHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `InvertActionsColors`<sup>Required</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColors"></a>

```csharp
public IResolvable InvertActionsColors { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `TextHover`<sup>Required</sup> <a name="TextHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHover"></a>

```csharp
public string TextHover { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceThemeDarkPaletteHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeader">DataAwsccConnectWorkspaceThemeDarkPaletteHeader</a>

---


### DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColors">InvertActionsColors</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActive">TextActive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActive">TextBackgroundActive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHover">TextBackgroundHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHover">TextHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigation">DataAwsccConnectWorkspaceThemeDarkPaletteNavigation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `InvertActionsColors`<sup>Required</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColors"></a>

```csharp
public IResolvable InvertActionsColors { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `TextActive`<sup>Required</sup> <a name="TextActive" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActive"></a>

```csharp
public string TextActive { get; }
```

- *Type:* string

---

##### `TextBackgroundActive`<sup>Required</sup> <a name="TextBackgroundActive" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActive"></a>

```csharp
public string TextBackgroundActive { get; }
```

- *Type:* string

---

##### `TextBackgroundHover`<sup>Required</sup> <a name="TextBackgroundHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHover"></a>

```csharp
public string TextBackgroundHover { get; }
```

- *Type:* string

---

##### `TextHover`<sup>Required</sup> <a name="TextHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHover"></a>

```csharp
public string TextHover { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceThemeDarkPaletteNavigation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigation">DataAwsccConnectWorkspaceThemeDarkPaletteNavigation</a>

---


### DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.canvas">Canvas</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.header">Header</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.navigation">Navigation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.primary">Primary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference">DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalette">DataAwsccConnectWorkspaceThemeDarkPalette</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Canvas`<sup>Required</sup> <a name="Canvas" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.canvas"></a>

```csharp
public DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference Canvas { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteCanvasOutputReference</a>

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.header"></a>

```csharp
public DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference Header { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteHeaderOutputReference</a>

---

##### `Navigation`<sup>Required</sup> <a name="Navigation" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.navigation"></a>

```csharp
public DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference Navigation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference">DataAwsccConnectWorkspaceThemeDarkPaletteNavigationOutputReference</a>

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.primary"></a>

```csharp
public DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference Primary { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference">DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPaletteOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceThemeDarkPalette InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalette">DataAwsccConnectWorkspaceThemeDarkPalette</a>

---


### DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.active">Active</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastText">ContrastText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimary">DataAwsccConnectWorkspaceThemeDarkPalettePrimary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.active"></a>

```csharp
public string Active { get; }
```

- *Type:* string

---

##### `ContrastText`<sup>Required</sup> <a name="ContrastText" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastText"></a>

```csharp
public string ContrastText { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceThemeDarkPalettePrimary InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkPalettePrimary">DataAwsccConnectWorkspaceThemeDarkPalettePrimary</a>

---


### DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily">DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily">DataAwsccConnectWorkspaceThemeDarkTypographyFontFamily</a>

---


### DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference <a name="DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamily">FontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference">DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypography">DataAwsccConnectWorkspaceThemeDarkTypography</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FontFamily`<sup>Required</sup> <a name="FontFamily" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamily"></a>

```csharp
public DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference FontFamily { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference">DataAwsccConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypographyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceThemeDarkTypography InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkTypography">DataAwsccConnectWorkspaceThemeDarkTypography</a>

---


### DataAwsccConnectWorkspaceThemeLightOutputReference <a name="DataAwsccConnectWorkspaceThemeLightOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeLightOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.palette">Palette</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.typography">Typography</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference">DataAwsccConnectWorkspaceThemeLightTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLight">DataAwsccConnectWorkspaceThemeLight</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Palette`<sup>Required</sup> <a name="Palette" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.palette"></a>

```csharp
public DataAwsccConnectWorkspaceThemeLightPaletteOutputReference Palette { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteOutputReference</a>

---

##### `Typography`<sup>Required</sup> <a name="Typography" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.typography"></a>

```csharp
public DataAwsccConnectWorkspaceThemeLightTypographyOutputReference Typography { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference">DataAwsccConnectWorkspaceThemeLightTypographyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceThemeLight InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLight">DataAwsccConnectWorkspaceThemeLight</a>

---


### DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference <a name="DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackground">ActiveBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackground">ContainerBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackground">PageBackground</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvas">DataAwsccConnectWorkspaceThemeLightPaletteCanvas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveBackground`<sup>Required</sup> <a name="ActiveBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackground"></a>

```csharp
public string ActiveBackground { get; }
```

- *Type:* string

---

##### `ContainerBackground`<sup>Required</sup> <a name="ContainerBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackground"></a>

```csharp
public string ContainerBackground { get; }
```

- *Type:* string

---

##### `PageBackground`<sup>Required</sup> <a name="PageBackground" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackground"></a>

```csharp
public string PageBackground { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceThemeLightPaletteCanvas InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvas">DataAwsccConnectWorkspaceThemeLightPaletteCanvas</a>

---


### DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference <a name="DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColors">InvertActionsColors</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHover">TextHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeader">DataAwsccConnectWorkspaceThemeLightPaletteHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `InvertActionsColors`<sup>Required</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColors"></a>

```csharp
public IResolvable InvertActionsColors { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `TextHover`<sup>Required</sup> <a name="TextHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHover"></a>

```csharp
public string TextHover { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceThemeLightPaletteHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeader">DataAwsccConnectWorkspaceThemeLightPaletteHeader</a>

---


### DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference <a name="DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.background">Background</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColors">InvertActionsColors</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActive">TextActive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActive">TextBackgroundActive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHover">TextBackgroundHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHover">TextHover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigation">DataAwsccConnectWorkspaceThemeLightPaletteNavigation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Background`<sup>Required</sup> <a name="Background" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.background"></a>

```csharp
public string Background { get; }
```

- *Type:* string

---

##### `InvertActionsColors`<sup>Required</sup> <a name="InvertActionsColors" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColors"></a>

```csharp
public IResolvable InvertActionsColors { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `TextActive`<sup>Required</sup> <a name="TextActive" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActive"></a>

```csharp
public string TextActive { get; }
```

- *Type:* string

---

##### `TextBackgroundActive`<sup>Required</sup> <a name="TextBackgroundActive" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActive"></a>

```csharp
public string TextBackgroundActive { get; }
```

- *Type:* string

---

##### `TextBackgroundHover`<sup>Required</sup> <a name="TextBackgroundHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHover"></a>

```csharp
public string TextBackgroundHover { get; }
```

- *Type:* string

---

##### `TextHover`<sup>Required</sup> <a name="TextHover" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHover"></a>

```csharp
public string TextHover { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceThemeLightPaletteNavigation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigation">DataAwsccConnectWorkspaceThemeLightPaletteNavigation</a>

---


### DataAwsccConnectWorkspaceThemeLightPaletteOutputReference <a name="DataAwsccConnectWorkspaceThemeLightPaletteOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeLightPaletteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.canvas">Canvas</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.header">Header</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.navigation">Navigation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.primary">Primary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference">DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalette">DataAwsccConnectWorkspaceThemeLightPalette</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Canvas`<sup>Required</sup> <a name="Canvas" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.canvas"></a>

```csharp
public DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference Canvas { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteCanvasOutputReference</a>

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.header"></a>

```csharp
public DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference Header { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteHeaderOutputReference</a>

---

##### `Navigation`<sup>Required</sup> <a name="Navigation" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.navigation"></a>

```csharp
public DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference Navigation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference">DataAwsccConnectWorkspaceThemeLightPaletteNavigationOutputReference</a>

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.primary"></a>

```csharp
public DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference Primary { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference">DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPaletteOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceThemeLightPalette InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalette">DataAwsccConnectWorkspaceThemeLightPalette</a>

---


### DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference <a name="DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.active">Active</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastText">ContrastText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimary">DataAwsccConnectWorkspaceThemeLightPalettePrimary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.active"></a>

```csharp
public string Active { get; }
```

- *Type:* string

---

##### `ContrastText`<sup>Required</sup> <a name="ContrastText" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastText"></a>

```csharp
public string ContrastText { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceThemeLightPalettePrimary InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightPalettePrimary">DataAwsccConnectWorkspaceThemeLightPalettePrimary</a>

---


### DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference <a name="DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamily">DataAwsccConnectWorkspaceThemeLightTypographyFontFamily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceThemeLightTypographyFontFamily InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamily">DataAwsccConnectWorkspaceThemeLightTypographyFontFamily</a>

---


### DataAwsccConnectWorkspaceThemeLightTypographyOutputReference <a name="DataAwsccConnectWorkspaceThemeLightTypographyOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeLightTypographyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamily">FontFamily</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference">DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypography">DataAwsccConnectWorkspaceThemeLightTypography</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FontFamily`<sup>Required</sup> <a name="FontFamily" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamily"></a>

```csharp
public DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference FontFamily { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference">DataAwsccConnectWorkspaceThemeLightTypographyFontFamilyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypographyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceThemeLightTypography InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightTypography">DataAwsccConnectWorkspaceThemeLightTypography</a>

---


### DataAwsccConnectWorkspaceThemeOutputReference <a name="DataAwsccConnectWorkspaceThemeOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectWorkspaceThemeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.dark">Dark</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference">DataAwsccConnectWorkspaceThemeDarkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.light">Light</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference">DataAwsccConnectWorkspaceThemeLightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTheme">DataAwsccConnectWorkspaceTheme</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dark`<sup>Required</sup> <a name="Dark" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.dark"></a>

```csharp
public DataAwsccConnectWorkspaceThemeDarkOutputReference Dark { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeDarkOutputReference">DataAwsccConnectWorkspaceThemeDarkOutputReference</a>

---

##### `Light`<sup>Required</sup> <a name="Light" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.light"></a>

```csharp
public DataAwsccConnectWorkspaceThemeLightOutputReference Light { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeLightOutputReference">DataAwsccConnectWorkspaceThemeLightOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceThemeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectWorkspaceTheme InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectWorkspace.DataAwsccConnectWorkspaceTheme">DataAwsccConnectWorkspaceTheme</a>

---



