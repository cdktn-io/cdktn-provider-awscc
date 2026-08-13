# `dataAwsccRefactorspacesRoute` Submodule <a name="`dataAwsccRefactorspacesRoute` Submodule" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRefactorspacesRoute <a name="DataAwsccRefactorspacesRoute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/refactorspaces_route awscc_refactorspaces_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRefactorspacesRoute(Construct Scope, string Id, DataAwsccRefactorspacesRouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig">DataAwsccRefactorspacesRouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig">DataAwsccRefactorspacesRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRefactorspacesRoute resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRefactorspacesRoute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRefactorspacesRoute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRefactorspacesRoute.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRefactorspacesRoute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccRefactorspacesRoute resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRefactorspacesRoute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRefactorspacesRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/refactorspaces_route#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRefactorspacesRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.applicationIdentifier">ApplicationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.defaultRoute">DefaultRoute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference">DataAwsccRefactorspacesRouteDefaultRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.pathResourceToId">PathResourceToId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.routeIdentifier">RouteIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.routeType">RouteType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.serviceIdentifier">ServiceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList">DataAwsccRefactorspacesRouteTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.uriPathRoute">UriPathRoute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference">DataAwsccRefactorspacesRouteUriPathRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApplicationIdentifier`<sup>Required</sup> <a name="ApplicationIdentifier" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.applicationIdentifier"></a>

```csharp
public string ApplicationIdentifier { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DefaultRoute`<sup>Required</sup> <a name="DefaultRoute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.defaultRoute"></a>

```csharp
public DataAwsccRefactorspacesRouteDefaultRouteOutputReference DefaultRoute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference">DataAwsccRefactorspacesRouteDefaultRouteOutputReference</a>

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.environmentIdentifier"></a>

```csharp
public string EnvironmentIdentifier { get; }
```

- *Type:* string

---

##### `PathResourceToId`<sup>Required</sup> <a name="PathResourceToId" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.pathResourceToId"></a>

```csharp
public string PathResourceToId { get; }
```

- *Type:* string

---

##### `RouteIdentifier`<sup>Required</sup> <a name="RouteIdentifier" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.routeIdentifier"></a>

```csharp
public string RouteIdentifier { get; }
```

- *Type:* string

---

##### `RouteType`<sup>Required</sup> <a name="RouteType" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.routeType"></a>

```csharp
public string RouteType { get; }
```

- *Type:* string

---

##### `ServiceIdentifier`<sup>Required</sup> <a name="ServiceIdentifier" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.serviceIdentifier"></a>

```csharp
public string ServiceIdentifier { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.tags"></a>

```csharp
public DataAwsccRefactorspacesRouteTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList">DataAwsccRefactorspacesRouteTagsList</a>

---

##### `UriPathRoute`<sup>Required</sup> <a name="UriPathRoute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.uriPathRoute"></a>

```csharp
public DataAwsccRefactorspacesRouteUriPathRouteOutputReference UriPathRoute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference">DataAwsccRefactorspacesRouteUriPathRouteOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRefactorspacesRouteConfig <a name="DataAwsccRefactorspacesRouteConfig" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRefactorspacesRouteConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/refactorspaces_route#id DataAwsccRefactorspacesRoute#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRefactorspacesRouteDefaultRoute <a name="DataAwsccRefactorspacesRouteDefaultRoute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRefactorspacesRouteDefaultRoute {

};
```


### DataAwsccRefactorspacesRouteTags <a name="DataAwsccRefactorspacesRouteTags" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRefactorspacesRouteTags {

};
```


### DataAwsccRefactorspacesRouteUriPathRoute <a name="DataAwsccRefactorspacesRouteUriPathRoute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRefactorspacesRouteUriPathRoute {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRefactorspacesRouteDefaultRouteOutputReference <a name="DataAwsccRefactorspacesRouteDefaultRouteOutputReference" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRefactorspacesRouteDefaultRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.property.activationState">ActivationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRoute">DataAwsccRefactorspacesRouteDefaultRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActivationState`<sup>Required</sup> <a name="ActivationState" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.property.activationState"></a>

```csharp
public string ActivationState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRefactorspacesRouteDefaultRoute InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRoute">DataAwsccRefactorspacesRouteDefaultRoute</a>

---


### DataAwsccRefactorspacesRouteTagsList <a name="DataAwsccRefactorspacesRouteTagsList" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRefactorspacesRouteTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.get"></a>

```csharp
private DataAwsccRefactorspacesRouteTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccRefactorspacesRouteTagsOutputReference <a name="DataAwsccRefactorspacesRouteTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRefactorspacesRouteTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTags">DataAwsccRefactorspacesRouteTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRefactorspacesRouteTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTags">DataAwsccRefactorspacesRouteTags</a>

---


### DataAwsccRefactorspacesRouteUriPathRouteOutputReference <a name="DataAwsccRefactorspacesRouteUriPathRouteOutputReference" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRefactorspacesRouteUriPathRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.activationState">ActivationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.appendSourcePath">AppendSourcePath</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.includeChildPaths">IncludeChildPaths</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.methods">Methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.sourcePath">SourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRoute">DataAwsccRefactorspacesRouteUriPathRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActivationState`<sup>Required</sup> <a name="ActivationState" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.activationState"></a>

```csharp
public string ActivationState { get; }
```

- *Type:* string

---

##### `AppendSourcePath`<sup>Required</sup> <a name="AppendSourcePath" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.appendSourcePath"></a>

```csharp
public IResolvable AppendSourcePath { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IncludeChildPaths`<sup>Required</sup> <a name="IncludeChildPaths" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.includeChildPaths"></a>

```csharp
public IResolvable IncludeChildPaths { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.methods"></a>

```csharp
public string[] Methods { get; }
```

- *Type:* string[]

---

##### `SourcePath`<sup>Required</sup> <a name="SourcePath" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.sourcePath"></a>

```csharp
public string SourcePath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRefactorspacesRouteUriPathRoute InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRoute">DataAwsccRefactorspacesRouteUriPathRoute</a>

---



