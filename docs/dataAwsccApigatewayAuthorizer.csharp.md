# `dataAwsccApigatewayAuthorizer` Submodule <a name="`dataAwsccApigatewayAuthorizer` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayAuthorizer <a name="DataAwsccApigatewayAuthorizer" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apigateway_authorizer awscc_apigateway_authorizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayAuthorizer(Construct Scope, string Id, DataAwsccApigatewayAuthorizerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig">DataAwsccApigatewayAuthorizerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig">DataAwsccApigatewayAuthorizerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayAuthorizer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayAuthorizer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayAuthorizer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayAuthorizer.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApigatewayAuthorizer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccApigatewayAuthorizer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApigatewayAuthorizer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApigatewayAuthorizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apigateway_authorizer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayAuthorizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authorizerCredentials">AuthorizerCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authorizerId">AuthorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authorizerUri">AuthorizerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.identitySource">IdentitySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.jwtConfiguration">JwtConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference">DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.providerArNs">ProviderArNs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.restApiId">RestApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AuthorizerCredentials`<sup>Required</sup> <a name="AuthorizerCredentials" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authorizerCredentials"></a>

```csharp
public string AuthorizerCredentials { get; }
```

- *Type:* string

---

##### `AuthorizerId`<sup>Required</sup> <a name="AuthorizerId" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authorizerId"></a>

```csharp
public string AuthorizerId { get; }
```

- *Type:* string

---

##### `AuthorizerResultTtlInSeconds`<sup>Required</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authorizerResultTtlInSeconds"></a>

```csharp
public double AuthorizerResultTtlInSeconds { get; }
```

- *Type:* double

---

##### `AuthorizerUri`<sup>Required</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authorizerUri"></a>

```csharp
public string AuthorizerUri { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `IdentitySource`<sup>Required</sup> <a name="IdentitySource" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.identitySource"></a>

```csharp
public string IdentitySource { get; }
```

- *Type:* string

---

##### `IdentityValidationExpression`<sup>Required</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.identityValidationExpression"></a>

```csharp
public string IdentityValidationExpression { get; }
```

- *Type:* string

---

##### `JwtConfiguration`<sup>Required</sup> <a name="JwtConfiguration" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.jwtConfiguration"></a>

```csharp
public DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference JwtConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference">DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderArNs`<sup>Required</sup> <a name="ProviderArNs" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.providerArNs"></a>

```csharp
public string[] ProviderArNs { get; }
```

- *Type:* string[]

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.restApiId"></a>

```csharp
public string RestApiId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayAuthorizerConfig <a name="DataAwsccApigatewayAuthorizerConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayAuthorizerConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apigateway_authorizer#id DataAwsccApigatewayAuthorizer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayAuthorizerJwtConfiguration <a name="DataAwsccApigatewayAuthorizerJwtConfiguration" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayAuthorizerJwtConfiguration {

};
```


### DataAwsccApigatewayAuthorizerJwtConfigurationIssuers <a name="DataAwsccApigatewayAuthorizerJwtConfigurationIssuers" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayAuthorizerJwtConfigurationIssuers {

};
```


### DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims <a name="DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList <a name="DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.get"></a>

```csharp
private DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference <a name="DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.claimName">ClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.expectedValues">ExpectedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.required">Required</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims">DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClaimName`<sup>Required</sup> <a name="ClaimName" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.claimName"></a>

```csharp
public string ClaimName { get; }
```

- *Type:* string

---

##### `ExpectedValues`<sup>Required</sup> <a name="ExpectedValues" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.expectedValues"></a>

```csharp
public string[] ExpectedValues { get; }
```

- *Type:* string[]

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.required"></a>

```csharp
public IResolvable Required { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims">DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims</a>

---


### DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList <a name="DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.get"></a>

```csharp
private DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference <a name="DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.additionalClaims">AdditionalClaims</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList">DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.audiences">Audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuers">DataAwsccApigatewayAuthorizerJwtConfigurationIssuers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalClaims`<sup>Required</sup> <a name="AdditionalClaims" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.additionalClaims"></a>

```csharp
public DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList AdditionalClaims { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList">DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList</a>

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.audiences"></a>

```csharp
public string[] Audiences { get; }
```

- *Type:* string[]

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayAuthorizerJwtConfigurationIssuers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuers">DataAwsccApigatewayAuthorizerJwtConfigurationIssuers</a>

---


### DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference <a name="DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.defaultAlgorithms">DefaultAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.issuers">Issuers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList">DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfiguration">DataAwsccApigatewayAuthorizerJwtConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultAlgorithms`<sup>Required</sup> <a name="DefaultAlgorithms" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.defaultAlgorithms"></a>

```csharp
public string[] DefaultAlgorithms { get; }
```

- *Type:* string[]

---

##### `Issuers`<sup>Required</sup> <a name="Issuers" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.issuers"></a>

```csharp
public DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList Issuers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList">DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApigatewayAuthorizerJwtConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfiguration">DataAwsccApigatewayAuthorizerJwtConfiguration</a>

---



