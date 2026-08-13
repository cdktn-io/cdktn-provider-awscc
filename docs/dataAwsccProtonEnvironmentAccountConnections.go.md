# `dataAwsccProtonEnvironmentAccountConnections` Submodule <a name="`dataAwsccProtonEnvironmentAccountConnections` Submodule" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccProtonEnvironmentAccountConnections <a name="DataAwsccProtonEnvironmentAccountConnections" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/proton_environment_account_connections awscc_proton_environment_account_connections}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccprotonenvironmentaccountconnections"

dataawsccprotonenvironmentaccountconnections.NewDataAwsccProtonEnvironmentAccountConnections(scope Construct, id *string, config DataAwsccProtonEnvironmentAccountConnectionsConfig) DataAwsccProtonEnvironmentAccountConnections
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig">DataAwsccProtonEnvironmentAccountConnectionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig">DataAwsccProtonEnvironmentAccountConnectionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccProtonEnvironmentAccountConnections resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccprotonenvironmentaccountconnections"

dataawsccprotonenvironmentaccountconnections.DataAwsccProtonEnvironmentAccountConnections_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccprotonenvironmentaccountconnections"

dataawsccprotonenvironmentaccountconnections.DataAwsccProtonEnvironmentAccountConnections_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccprotonenvironmentaccountconnections"

dataawsccprotonenvironmentaccountconnections.DataAwsccProtonEnvironmentAccountConnections_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccprotonenvironmentaccountconnections"

dataawsccprotonenvironmentaccountconnections.DataAwsccProtonEnvironmentAccountConnections_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccProtonEnvironmentAccountConnections resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccProtonEnvironmentAccountConnections to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccProtonEnvironmentAccountConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/proton_environment_account_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccProtonEnvironmentAccountConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnections.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccProtonEnvironmentAccountConnectionsConfig <a name="DataAwsccProtonEnvironmentAccountConnectionsConfig" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccprotonenvironmentaccountconnections"

&dataawsccprotonenvironmentaccountconnections.DataAwsccProtonEnvironmentAccountConnectionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccProtonEnvironmentAccountConnections.DataAwsccProtonEnvironmentAccountConnectionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---



