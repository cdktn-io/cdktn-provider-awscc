# `dataAwsccWorkspaceswebSessionLoggers` Submodule <a name="`dataAwsccWorkspaceswebSessionLoggers` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspaceswebSessionLoggers <a name="DataAwsccWorkspaceswebSessionLoggers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/workspacesweb_session_loggers awscc_workspacesweb_session_loggers}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebSessionLoggers(Construct Scope, string Id, DataAwsccWorkspaceswebSessionLoggersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig">DataAwsccWorkspaceswebSessionLoggersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig">DataAwsccWorkspaceswebSessionLoggersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWorkspaceswebSessionLoggers resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspaceswebSessionLoggers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspaceswebSessionLoggers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspaceswebSessionLoggers.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspaceswebSessionLoggers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccWorkspaceswebSessionLoggers resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWorkspaceswebSessionLoggers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWorkspaceswebSessionLoggers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/workspacesweb_session_loggers#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspaceswebSessionLoggers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspaceswebSessionLoggersConfig <a name="DataAwsccWorkspaceswebSessionLoggersConfig" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspaceswebSessionLoggersConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebSessionLoggers.DataAwsccWorkspaceswebSessionLoggersConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---



